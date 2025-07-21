
export function isNewItem(createdAt: Date, days = 7): boolean {
    const now = new Date();
    const threshold = new Date(now);
    threshold.setDate(now.getDate() - days);
  
    return createdAt >= threshold;
  }
  