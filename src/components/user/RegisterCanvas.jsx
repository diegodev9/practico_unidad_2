

const RegisterCanvas = ({ dataTitle }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  console.log('from canvas', dataTitle)
  const title = dataTitle === 'login' ? 'Login' : 'Sign up';

  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="canvasExample"
         aria-labelledby="canvasExampleLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="canvasExampleLabel">{title}</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="input_mail" className="col-form-label-sm">Correo electrónico</label>
            <input type="email" className="form-control" id="input_mail" placeholder="nombre@ejemplo.com"/>
          </div>
          <div className="mb-3">
            <label htmlFor="input_password" className="col-form-label-sm">Password</label>
            <input type="password" className="form-control" id="input_password"/>
          </div>
          <div className="mb-3">
            <label htmlFor="input_confirmar_password" className="col-form-label-sm">Confirmar password</label>
            <input type="password" className="form-control" id="input_confirmar_password"/>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary" id="submit_button" data-bs-dismiss="offcanvas" aria-label="Close">Confirmar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterCanvas;