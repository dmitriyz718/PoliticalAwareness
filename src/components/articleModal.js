import React, { Component, Fragment } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import { Image } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchArticle } from "../../actions/itemActions";

class articleModal extends Component {
  state = {
    modal: false,
    name: "",
    description: "",
    creator: "",
    imgUrl: "",
    quantity: 0,
  };
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    singleItem: PropTypes.object.isRequired,
  };

  toggle = () => {
    this.props.getProduct(this.props.id);
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const itemToAdd = {
      name: this.props.item.name,
      quantity: this.props.item.quantity,
    };
    this.props.addToCart(itemToAdd);
    // add item to cart via additem action

    // close modal
    this.toggle();
  };
  render() {
    return (
      <Fragment>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          View Item
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>View Product</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="name">
                  <strong>Flavor:</strong> {this.props.item.name}
                </Label>

                <Label for="description">
                  <strong>Description: </strong>
                  {this.props.item.description}
                </Label>

                <Label for="creator">
                  <strong>Crafted by: </strong>
                  {this.props.item.creator}
                </Label>

                <Image src={this.props.item.imgUrl} fluid></Image>

                <Label for="quantity">
                  <strong>Quantity left: </strong>
                  {this.props.item.quantity}
                </Label>

                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add To Cart
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  item: state.item.singleItem,
  user: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { fetchArticle })(articleModal);
