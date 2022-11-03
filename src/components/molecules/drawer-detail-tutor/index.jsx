import { DrawerBase } from "components/atoms";
import React from "react";

export default function Drawer({ isOpen, setIsOpen, title }) {
    return (
        <DrawerBase
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title={title}
        >
            <p>
                Drawer Detail
            </p>
        </DrawerBase>
    );
}
