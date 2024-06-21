import * as service from '../services/cart.services.js'

export const getAll = async (req, res, next) => {
    try {
      const response = await service.getAll();
      res.status(200).json(response);
    } catch (error) {
      next(error.message);
    }
  };
  
  export const getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await service.getById(id);
      if (!response) res.status(404).json({ msg: "Ups...the cart was not found :(" });
      else res.status(200).json(response);
    } catch (error) {
      next(error.message);
    }
  };
  
  export const create = async (req, res, next) => {
    try {
      const newCart = await service.create();
      if (!newCart) res.status(404).json({ msg: "Error creating cart...sorry" });
      else res.status(200).json(newCart);
    } catch (error) {
      next(error.message);
    }
  };
  
  export const update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const cartUpd = await service.update(id, req.body);
      if (!cartUpd) res.status(404).json({ msg: "💫 oh sorry, error updating cart💫" });
      else res.status(200).json(cartUpd);
    } catch (error) {
      next(error.message);
    }
  };
  
  export const remove = async (req, res, next) => {
    try {
      const { id } = req.params;
      const cartDel = await service.remove(id);
      if (!cartDel) res.status(404).json({ msg: "💫 Yikes... couldn't delete cart!" });
      else res.status(200).json({ msg: `Cart id: ${id} deleted` });
    } catch (error) {
      next(error.message);
    }
  };

export const addProdToCart = async (req, res, next) => {
    try {
      const { idCart } = req.params;
      const { idProd } = req.params;
      const newProdToUserCart = await service.addProdToCart(
        idCart,
        idProd,
      );
      if (!newProdToUserCart) res.json({ msg: "💫We couldn't add the product to the cart💫" });
      else res.json(newProdToUserCart);
    } catch (error) {
      next(error.message);
    }
  };

  export const removeProdToCart = async (req, res, next) => {
    try {
      const { idCart } = req.params;
      const { idProd } = req.params;
      const delProdToUserCart = await service.removeProdToCart(
        idCart,
        idProd,
      );
      if (!delProdToUserCart) res.json({ msg: "💫 Error removing the product to cart, sorry" });
      else res.json({msg: `product ${idProd} deleted in cart`});
    } catch (error) {
      next(error.message);
    }
  };

  export const updateProdQuantityToCart = async (req, res, next) => {
    try {
      const { idCart } = req.params;
      const { idProd } = req.params;
      const { quantity } = req.body;
      const  updateProdQuantity = await service.updateProdQuantityToCart(
        idCart,
        idProd,
        quantity
      );
      if (!updateProdQuantity) res.json({ msg: "💫The product quantity in cart wasn´t updated💫" });
      else res.json(updateProdQuantity);
    } catch (error) {
      next(error.message);
    }
  };

  export const clearCart = async (req, res, next) => {
    try {
      const { idCart } = req.params;
      const clearCart = await service.clearCart(
        idCart,
      );
      if (!clearCart) res.json({ msg: "💫Error! The cart wasn´t cleared" });
      else res.json(clearCart);
    } catch (error) {
      next(error.message);
    }
  };