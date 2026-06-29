function Header({ siteName }) {
  return (
    <header>
      <h1>{siteName}</h1>

      <nav>
        <a href="#">Home</a> |{" "}
        <a href="#">Courses</a> |{" "}
        <a href="#">Profile</a>
      </nav>

      <hr />
    </header>
  );
}

export default Header;