import React, { Component } from "react";
import axios from "axios";
import Main from "../template/Main";

const headerProps = {
  icon: "users",
  title: "Gestão de Usuários",
  subtitle: "Gerencie usuários do sistema",
};

const baseUrl = "http://localhost:3001/users";
const initialState = {
  user: { name: "", email: "" },
  list: [],
};

export default class UserCrud extends Component {
  state = { ...initialState };

  componentDidMount() {
    axios(baseUrl).then(resp => {
      this.setState({ list: resp.data });
    });
  }

  clear = () => this.setState({ user: initialState.user });

  save = () => {
    const user = this.state.user;
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;

    axios[method](url, user).then(resp => {
      const list = this.getUpdatedList(resp.data);
      this.setState({ user: initialState.user, list });
    });
  };

  getUpdatedList(user, add = true) {
    const list = this.state.list.filter(u => u.id !== user.id);
    if (add) list.unshift(user);
    return list;
  }

  updateField = e => {
    const user = { ...this.state.user };
    user[e.target.name] = e.target.value;
    this.setState({ user });
  };

  load = user => this.setState({ user });

  remove = user => {
    axios.delete(`${baseUrl}/${user.id}`).then(() => {
      const list = this.getUpdatedList(user, false);
      this.setState({ list });
    });
  };

  renderForm() {
    return (
      <div className="form p-4 bg-dark text-white rounded shadow-sm">
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Nome</label>
            <input
              type="text"
              name="name"
              className="form-control bg-secondary text-white border-0"
              placeholder="Digite o nome"
              value={this.state.user.name}
              onChange={this.updateField}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">E-mail</label>
            <input
              type="email"
              name="email"
              className="form-control bg-secondary text-white border-0"
              placeholder="Digite o e-mail"
              value={this.state.user.email}
              onChange={this.updateField}
            />
          </div>
        </div>

        <div className="mt-4 d-flex justify-content-end gap-2">
          <button className="btn btn-success" onClick={this.save}>
            <i className="fa fa-check me-2" />
            Salvar
          </button>
          <button className="btn btn-outline-light" onClick={this.clear}>
            Cancelar
          </button>
        </div>
      </div>
    );
  }

  renderTable() {
    return (
      <table className="table table-dark table-striped mt-4 shadow-sm rounded overflow-hidden">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }

  renderRows() {
    return this.state.list.map(user => (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          <button className="btn btn-sm btn-warning me-2" onClick={() => this.load(user)}>
            <i className="fa fa-edit" />
          </button>
          <button className="btn btn-sm btn-danger" onClick={() => this.remove(user)}>
            <i className="fa fa-trash" />
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <Main {...headerProps}>
        {this.renderForm()}
        {this.renderTable()}
      </Main>
    );
  }
}
