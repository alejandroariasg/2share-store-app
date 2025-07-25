import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-light text-center py-3 mt-5 border-top">
      <p className="mb-0">&copy; {new Date().getFullYear()} 2Share Store App - Alejandro Arias Gallo</p>
    </footer>
  );
}