import React ,{ useState , useEffect } from "react";

const Ctx = React.createContext();

// Styled Components
// ==============================

const ToastContainer = props => (
  <div style={{ 
    position: "fixed", 
    right: "43%", 
    top: '30%' 
  }} {...props} />
);
const Toast = ({ children, onDismiss }) => {
  let cleartime = 0.5 ;
  useEffect(
    () => {
      let timer1 = setTimeout(() => onDismiss(), cleartime*1000);
      return () => {
        cleartime++
        clearTimeout(timer1);
      };
    }
    
  );
  return(
  <div
    style={{
    color :"black" ,
    background: "white",
    cursor: "pointer",
    fontSize: 14,
    margin: 10,
    padding: 10,
    animation: "fadeIn" ,
    animationDuration: "1s"
    }}
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