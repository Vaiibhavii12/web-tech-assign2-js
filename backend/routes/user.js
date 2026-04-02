import express from 'express';
import { authenticateToken } from '../middleware/auth.js';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

const router = express.Router();

// Get user profile
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user.getPublicProfile());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user profile
router.put('/profile', authenticateToken, async (req, res) => {
  try {
    const { name, avatar } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.userId,
      { name, avatar, updatedAt: new Date() },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user.getPublicProfile());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Change password
router.put('/change-password', authenticateToken, async (req, res) => {
  try {
    const { currentPassword, newPassword, confirmPassword } = req.body;

    if (!currentPassword || !newPassword || !confirmPassword) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({ error: 'New passwords do not match' });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    const user = await User.findById(req.user.userId).select('+password');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordCorrect = await user.comparePassword(currentPassword);

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: 'Current password is incorrect' });
    }

    user.password = newPassword;
    await user.save();

    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get API usage stats
router.get('/stats', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const stats = {
      subscription: user.subscription,
      apiUsage: user.apiUsage,
      apiLimits: user.apiLimits,
      subscriptionExpiry: user.subscriptionExpiry,
      createdAt: user.createdAt
    };

    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Upgrade subscription
router.post('/upgrade-subscription', authenticateToken, async (req, res) => {
  try {
    const { plan } = req.body;

    const validPlans = ['free', 'pro', 'enterprise'];
    if (!plan || !validPlans.includes(plan)) {
      return res.status(400).json({ error: 'Invalid subscription plan' });
    }

    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Set subscription expiry based on plan
    const expiryDate = new Date();
    if (plan === 'pro') {
      expiryDate.setMonth(expiryDate.getMonth() + 1);
      user.apiLimits.daily = 50;
      user.apiLimits.monthly = 500;
    } else if (plan === 'enterprise') {
      expiryDate.setMonth(expiryDate.getMonth() + 1);
      user.apiLimits.daily = 200;
      user.apiLimits.monthly = 5000;
    } else {
      user.apiLimits.daily = 10;
      user.apiLimits.monthly = 100;
    }

    user.subscription = plan;
    user.subscriptionExpiry = plan !== 'free' ? expiryDate : null;
    await user.save();

    res.json({
      message: `Subscription upgraded to ${plan}`,
      user: user.getPublicProfile()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete account
router.delete('/account', authenticateToken, async (req, res) => {
  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ error: 'Password is required' });
    }

    const user = await User.findById(req.user.userId).select('+password');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: 'Password is incorrect' });
    }

    // Delete user
    await User.findByIdAndDelete(req.user.userId);

    res.json({ message: 'Account deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
