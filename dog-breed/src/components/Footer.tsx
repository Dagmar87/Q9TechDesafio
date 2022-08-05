import React from "react";

const Footer = () => {
  const hoje = new Date();

  return (
    <footer className="py-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>Desenvolvido por José Dagmar FSS &copy; {hoje.getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
