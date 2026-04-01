'use client';

import { useState } from 'react';
import { Save, Eye, EyeOff, Copy, Check, LogOut } from 'lucide-react';

export default function SettingsPage() {
  const [showApiKey, setShowApiKey] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    fullName: 'John Doe',
    email: 'john@example.com',
    theme: 'dark',
    notifications: true,
    emailNotifications: true,
    dataSharing: false,
  });

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText('sk_test_1234567890abcdef');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    // Save settings
    console.log('Settings saved:', formState);
  };

  return (
    <div className="p-8 space-y-8 max-w-4xl">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold gold-text">Settings</h1>
        <p className="text-foreground/60">Manage your account, preferences, and API keys</p>
      </div>

      {/* Profile Settings */}
      <div className="card-elegant">
        <h2 className="text-2xl font-bold mb-6 gold-text">Profile</h2>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                value={formState.fullName}
                onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground smooth-transition focus:border-primary/50 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground smooth-transition focus:border-primary/50 outline-none"
              />
            </div>
          </div>

          <div className="border-t border-border/50 pt-6">
            <h3 className="text-lg font-semibold mb-4">Avatar</h3>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl font-bold text-primary-foreground">
                JD
              </div>
              <button className="button-secondary">Upload Photo</button>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="card-elegant">
        <h2 className="text-2xl font-bold mb-6 gold-text">Preferences</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Theme</label>
            <select
              value={formState.theme}
              onChange={(e) => setFormState({ ...formState, theme: e.target.value })}
              className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground smooth-transition focus:border-primary/50 outline-none"
            >
              <option value="dark" className="bg-card">Dark</option>
              <option value="light" className="bg-card">Light</option>
              <option value="auto" className="bg-card">Auto</option>
            </select>
          </div>

          <div className="border-t border-border/50 pt-4">
            <h3 className="font-semibold mb-4">Notifications</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formState.notifications}
                  onChange={(e) => setFormState({ ...formState, notifications: e.target.checked })}
                  className="w-4 h-4 accent-primary"
                />
                <span className="text-sm">Push notifications</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formState.emailNotifications}
                  onChange={(e) => setFormState({ ...formState, emailNotifications: e.target.checked })}
                  className="w-4 h-4 accent-primary"
                />
                <span className="text-sm">Email notifications</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formState.dataSharing}
                  onChange={(e) => setFormState({ ...formState, dataSharing: e.target.checked })}
                  className="w-4 h-4 accent-primary"
                />
                <span className="text-sm">Share usage data for improvements</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* API Keys */}
      <div className="card-elegant">
        <h2 className="text-2xl font-bold mb-6 gold-text">API Keys</h2>

        <div className="space-y-4">
          <div className="bg-secondary/30 rounded-lg p-4 border border-border/50">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-sm text-foreground/60 mb-1">API Key</p>
                <p className="text-sm font-mono">
                  {showApiKey ? 'sk_test_1234567890abcdef' : 'sk_test_••••••••••••••••'}
                </p>
              </div>
              <button
                onClick={() => setShowApiKey(!showApiKey)}
                className="p-2 hover:bg-secondary/50 rounded-lg smooth-transition"
              >
                {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <button
              onClick={handleCopyApiKey}
              className="flex items-center gap-2 text-sm text-primary hover:text-primary/80"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy key'}
            </button>
          </div>

          <button className="button-secondary w-full">
            Generate New Key
          </button>
        </div>
      </div>

      {/* Subscription */}
      <div className="card-elegant bg-gradient-to-r from-primary/20 to-accent/10 border-primary/30">
        <h2 className="text-2xl font-bold mb-6 gold-text">Subscription</h2>

        <div className="space-y-4">
          <div className="bg-black/20 rounded-lg p-4">
            <p className="text-sm text-foreground/60 mb-1">Current Plan</p>
            <p className="text-2xl font-bold text-foreground mb-3">Free Plan</p>
            <p className="text-sm text-foreground/70 mb-4">
              Upgrade to Pro for unlimited API calls, priority support, and advanced features.
            </p>
            <button className="button-primary">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="card-elegant border-red-500/30 bg-red-500/5">
        <h2 className="text-2xl font-bold mb-6 text-red-400">Danger Zone</h2>

        <div className="space-y-4">
          <div className="bg-black/20 rounded-lg p-4">
            <p className="text-sm mb-4">
              Logging out will clear your session. You'll need to sign in again to access your account.
            </p>
            <button className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 smooth-transition border border-red-500/30">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>

          <div className="bg-black/20 rounded-lg p-4">
            <p className="text-sm mb-4">
              Deleting your account is permanent and cannot be undone. All your data will be lost.
            </p>
            <button className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 smooth-transition border border-red-500/30">
              Delete Account
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end gap-3">
        <button className="button-secondary">Cancel</button>
        <button onClick={handleSave} className="button-primary flex items-center gap-2">
          <Save className="w-5 h-5" />
          Save Changes
        </button>
      </div>
    </div>
  );
}
