import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock, Apple, Play } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">NiceShop</h2>
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nullam in nibh vehicula, facilisis magna ut, consectetur 
              lorem. Proin eget tortor risus.
            </p>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.956 1.404-5.956s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Shop Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b-2 border-white pb-2 inline-block">Shop</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center"><span className="mr-2">→</span>New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center"><span className="mr-2">→</span>Bestsellers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center"><span className="mr-2">→</span>Women's Clothing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center"><span className="mr-2">→</span>Men's Clothing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center"><span className="mr-2">→</span>Accessories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center"><span className="mr-2">→</span>Sale</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b-2 border-white pb-2 inline-block">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center"><span className="mr-2">→</span>Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center"><span className="mr-2">→</span>Order Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center"><span className="mr-2">→</span>Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center"><span className="mr-2">→</span>Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center"><span className="mr-2">→</span>Size Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center"><span className="mr-2">→</span>Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b-2 border-white pb-2 inline-block">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Fashion Street, New York, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">hello@example.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <div>Monday-Friday: 9am-6pm</div>
                  <div>Saturday: 10am-4pm</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="mt-6 space-y-3">
              <a href="#" className="flex items-center space-x-3 bg-gray-800 rounded-lg px-4 py-3 hover:bg-gray-700 transition-colors">
                <Apple className="w-6 h-6" />
                <span className="font-medium">App Store</span>
              </a>
              <a href="#" className="flex items-center space-x-3 bg-gray-800 rounded-lg px-4 py-3 hover:bg-gray-700 transition-colors">
                <Play className="w-6 h-6" />
                <span className="font-medium">Google Play</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © Copyright <span className="font-semibold text-white">NiceShop</span>. All Rights Reserved.
              <br />
              Designed by <span className="font-semibold text-white">BootstrapMade</span>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Payment Icons */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-6 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">💳</span>
                </div>
                <div className="w-8 h-6 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">PP</span>
                </div>
                <div className="w-8 h-6 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">🍎</span>
                </div>
                <div className="w-8 h-6 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">G</span>
                </div>
                <div className="w-8 h-6 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">🏪</span>
                </div>
                <div className="w-8 h-6 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">💰</span>
                </div>
              </div>
              
              {/* Links */}
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}