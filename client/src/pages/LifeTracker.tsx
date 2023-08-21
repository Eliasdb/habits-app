const LifeTracker = () => {
  return (
    <main className="lifetracker-container">
      <section className="tracker-title">
        <h3>Your life in ...</h3>
      </section>
      <section className="input-section">
        <label htmlFor="dob">Date of birth</label>
        <input type="text" placeholder="14/08/1997" />
      </section>
      <section className="content"></section>
    </main>
  );
};
export default LifeTracker;
