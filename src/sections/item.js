import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import CardProduct from './product'

export class Item extends Component {
 static propTypes ={
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  condition: PropTypes.string,
  price: PropTypes.string
 }

 render(){

  const {thumbnail, title, condition, price} = this.props

  return (
    // <CardProduct/>
    <div className="thumbnail">
      <img className="img-responsive" src={thumbnail} alt={title} />
      <div className="caption">
        <h4>{title}</h4>
        <h5>Estado: {condition}</h5>
        <h3>${price}</h3>
      </div>
      <div className="Buy"><div className="label">+ Add to Cart</div></div>
      <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick"></input>
        <input type="hidden" name="hosted_button_id" value="5A34WFDB5F8G4"></input>
        <input type="image" src="https://www.sandbox.paypal.com/en_US/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
        <img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
      </form>


    </div>
    )

  }
}
/* API PAYPAL
const express = require('express');
const ejs = require('ejs');
const paypal = require('paypal-rest-sdk');

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AWZ9gU2XO7zkNBTNBNnzOEcxhLEo485rCdhdGVhP-kTr7CWc4MGP3fLV9WESjlMNZDbz--Vdw126Y66u',
  'client_secret': 'EH94XV4hjLWIHAbTeSnfW-RsH9LVeVnqFKgeJnIea8jtSI7R_Lljwu0nuIiYB911Q36aUgKjYoBbBLB8'
});

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

app.post('/pay', (req, res) => {
  const create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:3000/success",
        "cancel_url": "http://localhost:3000/cancel"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "Red Sox Hat",
                "sku": "001",
                "price": "25.00",
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "25.00"
        },
        "description": "Hat for the best team ever"
    }]
};

paypal.payment.create(create_payment_json, function (error, payment) {
  if (error) {
      throw error;
  } else {
      for(let i = 0;i < payment.links.length;i++){
        if(payment.links[i].rel === 'approval_url'){
          res.redirect(payment.links[i].href);
        }
      }
  }
});

});

app.get('/success', (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const execute_payment_json = {
    "payer_id": payerId,
    "transactions": [{
        "amount": {
            "currency": "USD",
            "total": "25.00"
        }
    }]
  };

  paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log(JSON.stringify(payment));
        res.send('Success');
    }
});
});

app.get('/cancel', (req, res) => res.send('Cancelled'));

app.listen(3000, () => console.log('Server Started'));
*/
