import { Fragment, useContext, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { MainContext } from "../../Contexts/MainContext";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""
                } h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}

export default function SubCategoriesWrapperAccordion() {
    const [open, setOpen] = useState(0);
    let { allCategories, allSubCategories } = useContext(MainContext)
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Fragment>
            {
                allCategories.map((category, i) => {
                    return <Accordion open={open === i + 1} icon={<Icon id={i + 1} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(i + 1)}>
                            {category.category}
                        </AccordionHeader>
                        <AccordionBody>
                            <ul className="accordionSubcategoryWrapper">
                                <li>
                                    <p className="font-semibold">Sub Categories</p>
                                </li>
                                {
                                    allSubCategories.map((subcategory) => {
                                        if (category.category == subcategory.category) {
                                            return <li className="py-3 border-b">{subcategory.subcategory}</li>
                                        }
                                    })
                                }
                            </ul>
                        </AccordionBody>
                    </Accordion>
                })
            }

        </Fragment>
    );
}