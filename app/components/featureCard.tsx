import styles from "./featureCard.module.css";

type FeatureType = "shopping" | "groups" | "reminders" | "reading" | "more";

type Props = {
    type: FeatureType;
}

export const FeatureCard = async ({ type }: Props) => {
    const getTitleForType = (type: FeatureType): string => {
        switch (type) {
            case "shopping":
                return "Shopping Lists";
            case "groups":
                return "Create Groups";
            case "reminders":
                return "Reminders";
            case "reading":
                return "Reading Lists";
            case "more":
                return "And so much more!";
        }
    }

    const getDescriptionForType = (type: FeatureType): string => {
        switch (type) {
            case "shopping":
                return "Create shared shopping lists and never forget the groceries again!";
            case "groups":
                return "Create and manage groups with your friends and family";
            case "reminders":
                return "Schedule reminders for yourself or other members.";
            case "reading":
                return "Add books to share your reading goals with the group";
            case "more":
                return "New features will be added in regular updates!";
        }
    }

    return (
        <div className={styles.featureCardRoot}>
            <div className={styles.featureCardIconContainer}>
                <img className={styles.icon} src={`/feature-cards/${type}.png`} alt={type} />
            </div>
            <div className={styles.featureCardTitle}>{getTitleForType(type)}</div>
            <div className={styles.featureCardDescription}>{getDescriptionForType(type)}</div>
        </div>
    );
};