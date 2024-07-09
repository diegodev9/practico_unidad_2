const RegisterCanvas = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="registerExample"
         aria-labelledby="registerExampleLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="registerExampleLabel">Nueva cuenta</h5>
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