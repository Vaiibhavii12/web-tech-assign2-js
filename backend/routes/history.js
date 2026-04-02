import express from 'express';
import { authenticateToken } from '../middleware/auth.js';
import History from '../models/History.js';

const router = express.Router();

// Get all history for user
router.get('/', authenticateToken, async (req, res) => {
  try {
    const { toolName, limit = 20, skip = 0 } = req.query;

    let query = { userId: req.user.userId };
    
    if (toolName) {
      query.toolName = toolName;
    }

    const history = await History.find(query)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip(parseInt(skip));

    const total = await History.countDocuments(query);

    res.json({
      history,
      total,
      limit: parseInt(limit),
      skip: parseInt(skip)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single history item
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const history = await History.findOne({
      _id: req.params.id,
      userId: req.user.userId
    });

    if (!history) {
      return res.status(404).json({ error: 'History item not found' });
    }

    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Save history item with custom title
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { title, isFavorite, tags } = req.body;

    const history = await History.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      { title, isFavorite, tags, updatedAt: new Date() },
      { new: true }
    );

    if (!history) {
      return res.status(404).json({ error: 'History item not found' });
    }

    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete history item
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const history = await History.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId
    });

    if (!history) {
      return res.status(404).json({ error: 'History item not found' });
    }

    res.json({ message: 'History item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete all history for user
router.delete('/', authenticateToken, async (req, res) => {
  try {
    const result = await History.deleteMany({ userId: req.user.userId });

    res.json({
      message: 'All history deleted successfully',
      deletedCount: result.deletedCount
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Toggle favorite
router.patch('/:id/favorite', authenticateToken, async (req, res) => {
  try {
    const history = await History.findOne({
      _id: req.params.id,
      userId: req.user.userId
    });

    if (!history) {
      return res.status(404).json({ error: 'History item not found' });
    }

    history.isFavorite = !history.isFavorite;
    await history.save();

    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get favorites only
router.get('/favorites/all', authenticateToken, async (req, res) => {
  try {
    const favorites = await History.find({
      userId: req.user.userId,
      isFavorite: true
    }).sort({ createdAt: -1 });

    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
