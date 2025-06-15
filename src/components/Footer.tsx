import React from 'react';
import PulsatingButton from "@/components/ui/pulsating-button";

const Footer: React.FC = () => {
  const handleDownload = () => {
    // Add your file URL here
    const fileUrl = 'https://drive.google.com/file/d/1oUETc_AtPl8X8LThpQ2rxGqjYAnfBETg/view?usp=sharing';
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
          <span className="text-muted-foreground">2025&copy; Amrinderdeep Singh Bhatt</span>
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
    backgroundColor: 'hsl(var(--background))',
    textAlign: 'center',
  },
  line: {
    border: '0',
    borderTop: '1px solid hsl(var(--border))',
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
    color: 'hsl(var(--muted-foreground))',
  },
  rightSection: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  downloadButton: {
    padding: '8px 16px',
    backgroundColor: 'hsl(var(--primary))',
    color: 'hsl(var(--primary-foreground))',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default Footer;
