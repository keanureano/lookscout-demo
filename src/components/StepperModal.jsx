import { InfoIcon, CaretIcon } from "./Icons";

function StepperModal() {
  return (
    <form className="StepperModal">
      <ModalHeader />
      <ModalBody />
      <ModalFooter />
    </form>
  );
}

function ModalHeader() {
  return (
    <div className="ModalHeader">
      <div className="Stepper SelectedStep">
        <div className="Step">
          <span>1</span>
          <p>Account</p>
        </div>
      </div>
      <div className="Stepper NextStep">
        <div className="Step">
          <span>2</span>
          <p>Personal</p>
        </div>
      </div>
      <div className="Stepper">
        <div className="Step">
          <span>3</span>
          <p>Billing</p>
        </div>
      </div>
      <div className="Stepper">
        <div className="Step">
          <span>4</span>
          <p>Done</p>
        </div>
      </div>
    </div>
  );
}

function ModalBody() {
  return (
    <div className="ModalBody">
      <div className="FormGroup">
        <label htmlFor="Name">Name</label>
        <InfoIcon />
        <input id="Name" placeholder="Bryan Koelpin" />
      </div>

      <div className="FormGroup">
        <label htmlFor="Email">Email*</label>
        <InfoIcon />
        <input id="Email" placeholder="Email Address" />
        <p>Please input a real Email Address</p>
      </div>

      <div className="PasswordGroup">
        <div className="FormGroup">
          <label htmlFor="Password">Password*</label>
          <InfoIcon />
          <input id="Password" type="password" placeholder="Password" />
          <p>Please enter your password</p>
        </div>

        <div className="FormGroup">
          <label htmlFor="ConfirmPassword">Confirm Password*</label>
          <InfoIcon />
          <input id="ConfirmPassword" placeholder="Confirm Password" />
          <p>Passwords need to match</p>
        </div>
      </div>

      <div className="FormCheckBox">
        <input id="CheckBox" type="checkbox" defaultChecked />
        <label htmlFor="CheckBox">I accept the Terms and Privacy Policy</label>
      </div>
    </div>
  );
}

function ModalFooter() {
  return (
    <div className="ModalFooter">
      <button className="NextButton" type="button">
        <span>Next</span>
        <CaretIcon />
      </button>
    </div>
  );
}

export default StepperModal;
