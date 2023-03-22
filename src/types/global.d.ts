export {}

declare global {

    //---authService---
    type loginInfo = {
        username: string,
        password: string,
    };
    type User = {
        id: number,
        username: string,
        email?: string,
    };
    type error = string | null;

    //---Comment---
    type CommentProps = {
        id: number,
        author: string,
        content: string,
        createdAt: number,
    };

    type PostProps = {
        id: number,
        title: string,
        body: string,
        createdAt: string,
    };

}