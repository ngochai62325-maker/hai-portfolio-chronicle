const Footer = () => {
  return (
    <footer className="py-8 bg-gradient-card border-t">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Nguyễn Ngọc Hải. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Kỹ thuật dữ liệu | Data Engineering
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
