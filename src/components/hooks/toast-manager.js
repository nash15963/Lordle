import React ,{ useState , useEffect } from "react";

const Ctx = React.createContext();

// Styled Components
// ==============================

const ToastContainer = props => (
  <div 
  style={{ 
    position: "fixed", 
    right: "40%", 
    top: '30%' 
  }} 
  {...props} />
);
const Toast = ({ children, onDismiss }) => {
  let cleartime = 1 ;
  useEffect(
    () => {
      let timer1 = setTimeout(() => onDismiss(), cleartime*800);
      return () => {
        cleartime++
        clearTimeout(timer1);
      };
    }
    
  );
  return(
  <div
  className="toast"
  onClick={onDismiss}
  >
    {children}
  </div>
);}

// Provider
// ==============================

let toastCount = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  // console.log(toasts)
  const add = content => {
    const id = toastCount++;
    const toast = { content, id };
    setToasts([...toasts, toast]);
    
  };
  const remove = id => {
    const newToasts = toasts.filter(t => t.id !== id);
    setToasts(newToasts);
  };
  // avoid creating a new fn on every render
  const onDismiss = id => () => {  
    remove(id);
  }

  return (
    <Ctx.Provider value={{ add, remove }}>
      {children}
      <ToastContainer>
        {toasts.map(({ content, id, ...rest }) => (
          <Toast key={id} Toast={Toast} onDismiss={onDismiss(id)} {...rest}>
            {content}
          </Toast>
        ))}
      </ToastContainer>
    </Ctx.Provider>
  );
}

// Consumer
// ==============================

export const useToasts = () => React.useContext(Ctx);


// https://codesandbox.io/s/71q1xvjnx?file=/src/index.js:62-122