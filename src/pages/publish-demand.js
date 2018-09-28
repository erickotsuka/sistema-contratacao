import React from "react";
import Layout from "../components/layout";
import '../css/main.css';
import '../css/util.css';

export default () => (
  <Layout>
    <div className="container-contact100">
      <div className="wrap-contact100">
        <form className="contact100-form validate-form">
          <span className="contact100-form-title">
            Nova Demanda
          </span>

          <div className="wrap-input100 validate-input" data-validate="Name is required">
            <span className="label-input100">Título</span>
            <input className="input100" type="text" name="name" placeholder="Idenfique da melhor forma a sua demanda"/>
            <span className="focus-input100"></span>
          </div>


          <div className="wrap-input100 input100-select">
            <span className="label-input100">Tipo de demanda</span>
            <div>
              <select className="selection-2" name="service">
                <option>Escolher</option>
                <option>Online Store</option>
                <option>eCommerce Bussiness</option>
                <option>UI/UX Design</option>
                <option>Online Services</option>
              </select>
            </div>
            <span className="focus-input100"></span>
          </div>

          <div className="wrap-input100 validate-input" data-validate = "Message is required">
            <span className="label-input100">Descrição</span>
            <textarea className="input100" name="message" placeholder="Descreva as necessidades da sua demanda"></textarea>
            <span className="focus-input100"></span>
          </div>

          <div className="wrap-input100 validate-input" data-validate="Name is required">
            <span className="label-input100">Prazo limite (opcional)</span>
            <input className="input100" type="text" name="name" placeholder="Data máxima para ter o trabalho entregue"/>
            <span className="focus-input100"></span>
          </div>

          <div className="container-contact100-form-btn">
            <div className="wrap-contact100-form-btn">
              <div className="contact100-form-bgbtn"></div>
              <button className="contact100-form-btn">
                <span>
                  Enviar
                  <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>


        </form>
      </div>
    </div>

  </Layout>

);
