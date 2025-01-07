import { Container } from '../Container';

export const MemeCoinSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primaryColor to-orange-400 text-white py-10">
      <Container>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">Join the Meme Coin Revolution!</h2>
          <div className="text-lg">
            Discover the most fun and engaging way to invest in the crypto world. Our meme coin is more than just a
            currency; its a community of like-minded enthusiasts ready to change the game.
          </div>
        </div>
      </Container>
    </section>
  );
};
