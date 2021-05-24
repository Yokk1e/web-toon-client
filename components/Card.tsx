export function Card() {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
      <a className="c-card  block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover transform transition duration-150 hover:scale-105"
            src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
        </div>
        <div className="p-4">
          <h2 className="mt-2 mb-2  font-bold">
            Purus Ullamcorper Inceptos Nibh
          </h2>
        </div>
      </a>
    </div>
  );
}
