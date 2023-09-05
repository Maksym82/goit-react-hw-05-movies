import styled from "@emotion/styled";

const ReviewList = styled.li`
    padding: 20px;
    list-style: none;
`;

const ReviewItem = styled.li`
background-color: #f2eee6;
padding: 25px;
font-size: 16px;
text-align: justify;
margin-bottom: 30px;
`;

const Name = styled.p`
    font-weight: bold;
`;

const Comment = styled.p`
    font-style: italic;
`;

export { ReviewList, ReviewItem, Name, Comment };