import mongoose from 'mongoose';

const historySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  toolName: {
    type: String,
    enum: ['codeGenerator', 'imageAnalyzer', 'translator', 'summarizer', 'contentWriter'],
    required: true
  },
  input: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  output: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  metadata: {
    language: String,
    fileSize: Number,
    processingTime: Number,
    tokens: Number
  },
  fileUrl: {
    type: String,
    default: null
  },
  title: {
    type: String,
    default: 'Untitled'
  },
  isFavorite: {
    type: Boolean,
    default: false
  },
  tags: [{
    type: String,
    trim: true
  }],
  createdAt: {
    type: Date,
    default: Date.now,
    index: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for faster queries
historySchema.index({ userId: 1, createdAt: -1 });
historySchema.index({ userId: 1, toolName: 1 });

export default mongoose.model('History', historySchema);
