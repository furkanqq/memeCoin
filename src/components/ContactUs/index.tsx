import Button from '../Button';
import { Input } from '../Input';

export default function ContactUs() {
  return (
    <section className="bg-primaryColor ">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black ">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-black sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let
          us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
            <Input type="email" id="email" placeholder="name@momey.com" className="bg-white" required />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
            <Input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you"
              className="bg-white"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
            <textarea
              id="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <Button type="submit" title={''} variant={'light'} className="w-full" size="md">
            Send message
          </Button>
        </form>
      </div>
    </section>
  );
}
