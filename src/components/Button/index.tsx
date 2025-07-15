import React, { useState } from "react";
import {
  StyledButton,
  TooltipContainer,
  Tooltip,
  TooltipArrow,
} from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  className?: string;
  showTooltip?: boolean;
}

export function Button({
  children,
  href = "#",
  onClick,
  showTooltip = false,
  ...props
}: Readonly<ButtonProps>) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (showTooltip) {
      setIsTooltipVisible(true);
      setTimeout(() => {
        setIsTooltipVisible(false);
      }, 2000);
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <TooltipContainer>
      <StyledButton href={href} onClick={handleClick} {...props}>
        {children}
      </StyledButton>
      {showTooltip && isTooltipVisible && (
        <Tooltip>
          Em breve
          <TooltipArrow />
        </Tooltip>
      )}
    </TooltipContainer>
  );
}
