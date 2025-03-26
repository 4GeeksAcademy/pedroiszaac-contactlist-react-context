const API_URL_BASE = 'https://playground.4geeks.com/contact';

export const initialStore = () => {
  return {
    message: null,
    todos: [{ id: 1, title: "Make the bed", background: null, }, {
      id: 2, title: "Do my homework", background: null,
    }
    ],
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {


  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'set_contacts':
      return {
        ...store,
        contacts: action.payload
      }
    default:
      throw Error('Unknown action.');
  }
}

export const obtenerContactos = async (dispatch) => {
  try {
    const response = await fetch(API_URL_BASE + '/agendas/pedroiszaac');
    if (response.status == 404) {
      crearAgenda()
      return
    }

    if (!response.ok) {
      throw new Error("Ocurrio un error al obtener los contactos");

    }

    const data = await response.json();
    dispatch({ type: "set_contacts", payload: data.contacts })

  } catch (error) {

    console.log(error)

  }
};

export const crearContactos = async (nuevoContacto, dispatch) => {
  try {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/pedroiszaac/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoContacto)
    });

    if (!response.ok) {
      throw new Error("Ocurrió un error al crear el contacto");
      return false
      
    } else {
      obtenerContactos(dispatch)
      return true
    }

  } catch (error) {

    console.log(error)

  }
};

export const crearAgenda = async () => {
  try {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/pedroiszaac", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });

    if (!response.ok) {
      throw new Error("Ocurrió un error al crear la agenda");

    }

  } catch (error) {

    console.log(error)

  }
};