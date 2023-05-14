import Trail from "./Trail";

export default function Trails({ courses }) {
    return (
        <>
            { Array.isArray(courses) && courses.map((course, index) =>
                <Trail
                    key={ index }
                    course={ course }
                />
            )}
        </>
    );
}

