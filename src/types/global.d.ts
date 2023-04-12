export {}

declare global {
    
    //----Home----
    type PathMap = {
        pageName: string,
        path: string,
    };

    //---authService---
    type LoginInfo = {
        username: string,
        password: string,
    };
    type User = {
        id: number | null,
        username: string | null,
        // email: string,
    };
    type error = string | null;

    type PostProps = {
        id: number,
        title: string,
        body: string,
        createdAt: number,
        updatedAt?: number[],
        userId: number,
        likes?: User[],
        bookMarked?: User[],
    };
    type CommentProps = {
        id: number,
        author: string,
        content: string,
        createdAt: number,
        userID: number,
        postID: number,
        updatedAt?: number[],
        likes?: User[],
    };
}