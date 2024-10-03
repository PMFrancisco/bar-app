import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";

export function TabKitchenIcon({
  style,
  ...rest
}: IconProps<ComponentProps<typeof FontAwesome6>["kitchen-set"]>) {
  return (
    <FontAwesome6 size={28} style={[{ marginBottom: -3 }, style]} {...rest} />
  );
}
