// components/Nav.tsx
import ThemeToggle from './ThemeToggle';

const Nav = () => {
  return (
    <header className="bg-white dark:bg-dark-blue-elements shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">
          Where in the world?
        </h1>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Nav;
