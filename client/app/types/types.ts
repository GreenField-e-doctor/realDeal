export interface PaymentComponentProps {
    styles: any; // Adjust type as needed
    amount:number
    link:string
  }
  
  export interface SignUpProps {
    signUp: (user: SignUpData) => void;
    changeView: (view: string) => void;
  }
  
  export interface SignUpData {
    name: string;
    password: string;
    email: string;
    role: string;
    image: string;
  }
  
  export interface SignUpProps {
    signUp: (data: SignUpData) => void;
    changeView: (view: string) => void;
}