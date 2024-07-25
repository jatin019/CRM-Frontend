// Utility function to format date in IST
export const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    // Format date directly with Indian time zone
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    };
  
    return date.toLocaleString('en-IN', options);
  }
  