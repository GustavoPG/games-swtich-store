// favoritosController.js
import { addFavorite, getAllFavorites, findFavoriteById, updateFavorite, deleteFavorite, findFavoriteByUserAndPublication  } from '../models/favoritosModel.js';

export const createNewFavorite = async (req, res) => {
  const { id_publicacion } = req.body;
  const id_usuario = req.user.id_usuario;

  if (!id_usuario || !id_publicacion) {
      return res.status(400).json({ error: 'Datos incompletos' });
  }

  try {
      const result = await addFavorite({
          id_usuario,
          id_publicacion,
          fecha_valoracion: new Date(),
      });

      return res.status(result.status).json({ message: result.message, favorito: result.favorite });
  } catch (error) {
      console.error("Error al agregar a favoritos:", error);
      return res.status(500).json({ error: 'Error al agregar a favoritos' });
  }
};



export const getFavorites = async (req, res) => {
  try {
    const favorites = await getAllFavorites();
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los favoritos' });
  }
};

export const getFavorite = async (req, res) => {
  try {
    const favorite = await findFavoriteById(req.params.id);
    if (!favorite) {
      return res.status(404).json({ error: 'Favorito no encontrado' });
    }
    res.json(favorite);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el favorito' });
  }
};

export const updateFavoriteBd = async (req, res) => {
  try {
    const favorite = await updateFavorite(req.params.id, req.body);
    if (!favorite) {
      return res.status(404).json({ error: 'Favorito no encontrado' });
    }
    res.json(favorite);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el favorito' });
  }
};

export const deleteFavoriteBd = async (req, res) => {
  try {
    const favorite = await deleteFavorite(req.params.id);
    if (!favorite) {
      return res.status(404).json({ error: 'Favorito no encontrado' });
    }
    res.json({ message: 'Favorito eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el favorito' });
  }
};
