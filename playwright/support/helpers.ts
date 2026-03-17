export function generateOrderCode() {
    const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  
    let suffix = '';
    for (let i = 0; i < 6; i++) {
      suffix += alphanumeric.charAt(Math.floor(Math.random() * alphanumeric.length));
    }
  
    return `VLO-${suffix}`;
  }