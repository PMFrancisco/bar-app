import AntDesign from "@expo/vector-icons/AntDesign";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";

export function AdminAddIcon({
  style,
  ...rest
}: IconProps<ComponentProps<typeof AntDesign>["name"]>) {
  return (
    <AntDesign size={28} style={[{ marginBottom: -3 }, style]} {...rest} />
  );
}
