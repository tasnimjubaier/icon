import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import ForkLeftOutlinedIcon from '@mui/icons-material/ForkLeftOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


const menus = [
    {
        title : "Dashboard",
        icon : <HomeTwoToneIcon sx={{ fontWeight: "100" }}/>,
        childs : [],
        expand : null
    },
    {
        title : "Favorites",
        icon : <StarBorderRoundedIcon />,
        childs : [],
        expand : <KeyboardArrowDownOutlinedIcon />
    },
    {
        title : "Order Management",
        icon : <BorderColorOutlinedIcon />,
        childs : [],
        expand : <KeyboardArrowDownOutlinedIcon />
    },
    {
        title : "Reporting",
        icon : <SummarizeOutlinedIcon />,
        childs : [],
        expand : <KeyboardArrowDownOutlinedIcon />
    },
    {
        title : "Recordings",
        icon : <KeyboardVoiceOutlinedIcon />,
        childs : [],
        expand : <KeyboardArrowDownOutlinedIcon />
    },
    {
        title : "Data Exports",
        icon : <ExitToAppOutlinedIcon />,
        childs : [],
        expand : <KeyboardArrowDownOutlinedIcon />
    },
    {
        title : "Leads",
        icon : <ForkLeftOutlinedIcon />,
        childs : ["View Lead Status", "Lead Reports"],
        expand : <KeyboardArrowDownOutlinedIcon />
    },
    {
        title : "Admin",
        icon : <SupervisorAccountOutlinedIcon />,
        childs : [],
        expand : <KeyboardArrowDownOutlinedIcon />
    },
]

export default menus;