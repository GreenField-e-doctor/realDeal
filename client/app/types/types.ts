export interface PaymentComponentProps {
    styles: any; 
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

export interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
  userId?: number;
}

export interface PostState {
  posts: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  postId: number;
  userId: number;
}

export interface CommentState {
  comments: Comment[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}