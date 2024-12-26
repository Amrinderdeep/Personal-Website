import React from 'react';
import PulsatingButton from "@/components/ui/pulsating-button";

const Footer: React.FC = () => {
  const handleDownload = () => {
    // Add your file URL here
    const fileUrl = 'https://drive.google.com/file/d/1U9CdmUXJ9Tm0rzqxBZ1KYH7MJU0O7fU0/view?usp=drive_link';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'resume.pdf';  // Set the name for the downloaded file
    link.click();
  };

  return (
    <footer style={{margin:'30px', marginTop: '50px'}}>
      <hr style={styles.line} />
      <div style={styles.footerContent}>
        <div style={styles.leftSection}>
          <span>2025&copy; Amrinderdeep Singh Bhatt</span>
        </div>
        <div style={styles.rightSection}>
          <PulsatingButton onClick={handleDownload}>Download Resume</PulsatingButton>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '20px',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
  },
  line: {
    border: '0',
    borderTop: '1px solid #ddd',
    margin: '30px auto',
    width: '85%',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  leftSection: {
    fontSize: '14px',
    color: '#333',
  },
  rightSection: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  downloadButton: {
    padding: '8px 16px',
    backgroundColor: '#004567',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default Footer;
