const LifeTracker = () => {
  return (
    <main className="text-3xl lifetracker-container">
      <section className="tracker-title">
        <h3>Life in year, months, weeks</h3>
      </section>
      <section className="input-section">
        {/* <label htmlFor="dob">Date of birth</label> */}
        <input className="dob-input" type="text" placeholder="14/08/1997" />
      </section>
      <section className="content"></section>
    </main>
  );
};
export default LifeTracker;
