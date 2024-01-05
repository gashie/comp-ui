import React from 'react'

const NewProject = () => {
  return (
        <div className="px-4 py-3 page-body">
            <form className="row g-3">
                <div className="col-12">
                    <h3>Create project</h3>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                        <input className="form-control" type="text" placeholder="Project title"/>
                        <label>Project title</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                        <select className="form-select">
                            <option defaultValue="selected">Select task view</option>
                            <option value="1">technical</option>
                            <option value="2">external</option>
                            <option value="3">organizational</option>
                        </select>
                        <label>Defult task view</label>
                    </div>
                </div>
                <div className="col-sm-6 col-12">
                    <div className="form-floating">
                        <select className="form-select">
                            <option defaultValue="selected">Select privacy</option>
                            <option value="1">Data Privacy One</option>
                            <option value="2">Data Privacy Two</option>
                            <option value="3">Data Privacy Three</option>
                        </select>
                        <label>Project privacy</label>
                    </div>
                </div>
                <div className="col-sm-6 col-12">
                    <div className="form-floating">
                        <select className="form-select">
                            <option defaultValue="selected">Select team</option>
                            <option value="1">Team One</option>
                            <option value="2">Team Two</option>
                            <option value="3">Team Three</option>
                        </select>
                        <label>Team </label>
                    </div>
                </div>
                <div className="col-sm-6 col-12">
                    <div className="form-floating">
                        <select className="form-select">
                            <option defaultValue="selected">Select assignees </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label>People </label>
                    </div>
                </div>
                <div className="col-sm-6 col-12">
                    <div className="form-floating">
                        <select className="form-select">
                            <option defaultValue="selected">Select admin</option>
                            <option value="1">Data Privacy One</option>
                            <option value="2">Data Privacy Two</option>
                            <option value="3">Data Privacy Three</option>
                        </select>
                        <label>Project Lead</label>
                    </div>
                </div>
                <div className="col-sm-6 col-12">
                    <div className="form-floating">
                        <input className="form-control" type="date" placeholder="StartDate"/>
                        <label>StartDate</label>
                    </div>
                </div>
                <div className="col-sm-6 col-12">
                    <div className="form-floating">
                        <input className="form-control" type="date" placeholder="Deadline"/>
                        <label>Deadline</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" style={{height: "100px"}}></textarea>
                        <label>Project overview</label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-floating">
                        <select className="form-select">
                            <option defaultValue="selected">Select client</option>
                            <option value="1">Client One</option>
                            <option value="2">Client Two</option>
                            <option value="3">Client Three</option>
                        </select>
                        <label>Client</label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-floating">
                        <input className="form-control" type="text" placeholder="Budget"/>
                        <label>Budget</label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="button" className="btn btn-secondary me-1" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary">Create Project</button>
                </div>
            </form>
        </div>
    )
}

export default NewProject