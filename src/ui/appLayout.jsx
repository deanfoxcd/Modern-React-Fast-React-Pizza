import CartOverview from '../features/cart/CartOverview';
import Header from './Header';

export default function appLayout() {
  return (
    <div>
      <Header />

      <main>
        <h1>Content</h1>
      </main>

      <CartOverview />
    </div>
  );
}
