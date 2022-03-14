import styled from "styled-components";

export interface AvatarContainerProps {
  size: number;
  name?: string;
  avatarUrl?: string;
}

export const AvatarContainer = styled.div<AvatarContainerProps>`
  display: inline-block;
  margin-right: 10px;
  .avatar-text {
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: ${(props) => props.size / 2.2}px;
      font-weight: bold;
      color: #fff;
    }
  }
  img {
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    border-radius: 50%;
  }
`;
