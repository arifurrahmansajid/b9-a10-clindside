
const Footer = () => {
    return (
        <div className='mt-20 container'>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Tech Support</a>
                    <a className="link link-hover">Product Reviews</a>
                    <a className="link link-hover">Tech News</a>
                    <a className="link link-hover">Accessories Shop</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <header className="footer-title">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        
                        <div className="relative">

                            <div className="join ">
                                <input className="input w-20  lg:w-40 input-bordered join-item" placeholder="Email" />
                                <button className="bg-indigo-600 py-3 px-4 font-medium text-white join-item rounded-r-lg">Email Us</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;