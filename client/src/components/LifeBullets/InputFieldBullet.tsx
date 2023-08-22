const InputFieldBullet = ({ dob, setDob }) => {
  return (
    <section className="input-section">
      {/* <label htmlFor="dob">Date of birth</label> */}
      <input
        className="dob-input"
        value={dob}
        onChange={(e) => setDob(e.target.value.toString())}
      />
    </section>
  );
};
export default InputFieldBullet;
