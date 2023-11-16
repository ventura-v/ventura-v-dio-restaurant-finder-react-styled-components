import ReactDOM from "react-dom";

const PortalModal = ({ children }) => {
    //pegando a div criada dentro do arquivo "index.html" na pasta "public"
    const portal = document.getElementById('modal-root');
    return ReactDOM.createPortal(children, portal);
};

export default PortalModal;