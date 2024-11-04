

const Footer = () => {
    return (
       <div className="">
        <h3 className="text-3xl font-bold text-center mt-[80px]">Gadget Heaven</h3>
        <p className="font-semibold opacity-70 text-center pt-3">Leading the way in cutting-edge technology and innovation.</p>
        <hr className="mt-5 bg-slate-100" />

         <footer className="footer flex justify-between lg:w-9/12 mx-auto bg-white p-10 text-black"> 
        <nav>
          <h6 className="footer-title font-black">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title font-black">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title font-black">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
       </div>
    );
};

export default Footer;