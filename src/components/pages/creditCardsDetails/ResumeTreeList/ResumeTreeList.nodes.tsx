import {
  ListItemNode,
  ResumeTreeButtons
} from "@/components"
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DescriptionIcon from '@mui/icons-material/Description';

export const items: ListItemNode[] = [
  {
    icon: <FolderIcon />,
    label: "Año 2023",
    childrens: [
      {
        icon: <DescriptionIcon />,
        label: "Resumen 01/2023",
        rightContent: <ResumeTreeButtons />,
      },
      {
        icon: <DescriptionIcon />,
        label: "Resumen 02/2023",
        rightContent: <ResumeTreeButtons />,
      },
      {
        icon: <DescriptionIcon />,
        label: "Resumen 03/2023",
        rightContent: <ResumeTreeButtons />,
      },
      {
        icon: <DescriptionIcon />,
        label: "Resumen 04/2023",
        rightContent: <ResumeTreeButtons />,
      },
      {
        icon: <DescriptionIcon />,
        label: "Resumen 05/2023",
        rightContent: <ResumeTreeButtons />,
      },
      {
        icon: <DescriptionIcon />,
        label: "Resumen 06/2023",
        rightContent: <ResumeTreeButtons />,
      }
    ]
  },
  {
    icon: <FolderIcon />,
    label: "Año 2022",
    childrens: [
      {
        icon: <DescriptionIcon />,
        label: "Resumen 01/2022",
        rightContent: <ResumeTreeButtons />,
      },
      {
        icon: <DescriptionIcon />,
        label: "Resumen 02/2022",
        rightContent: <ResumeTreeButtons />,
      }
    ]
  },
  {
    icon: <FolderIcon />,
    label: "Año 2021",
    childrens: [
      {
        icon: <DescriptionIcon />,
        label: "Resumen 01/2021",
        rightContent: <ResumeTreeButtons />,
      },
      {
        icon: <DescriptionIcon />,
        label: "Resumen 02/2021",
        rightContent: <ResumeTreeButtons />,
      }
    ]
  },
]