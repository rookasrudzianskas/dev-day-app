import { Text, StyleSheet, Pressable, Animated, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Task, useTasks} from "@/src/components/day16/TasksContextProvider";

const AnimatedView = Animated.createAnimatedComponent(View);

const RightActions = ({
  dragAnimatedValue,
  task
}: {
  dragAnimatedValue: Animated.AnimatedInterpolation<string | number>;
  task: Task;
}) => {
  const { deleteTask } = useTasks();

  const animatedStyles = {
    transform: [
      {
        translateX: dragAnimatedValue.interpolate({
          inputRange: [-40, 0],
          outputRange: [0, 40],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  return (
    <AnimatedView
      style={[
        {
          backgroundColor: 'crimson',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 10,
        },
        animatedStyles,
      ]}
    >
      <MaterialCommunityIcons
        onPress={() => deleteTask(task.id)}
        name="delete"
        size={20}
        color="white"
      />
    </AnimatedView>
  );
};

type TaskListItem = {
  task: any;
  index: number;
};

const TaskListItem = ({ task, index }: TaskListItem) => {
  const { onItemPressed, deleteTask} = useTasks();

  return (
    <Swipeable
      renderRightActions={(progressAnimatedValue, dragAnimatedValue) => (
        <RightActions
          dragAnimatedValue={dragAnimatedValue}
          task={task}
        />
      )}
    >
      <Pressable onPress={() => onItemPressed(index)} style={styles.taskContainer}>
        <MaterialCommunityIcons
          name={
            task.isFinished
              ? 'checkbox-marked-circle-outline'
              : 'checkbox-blank-circle-outline'
          }
          size={24}
          color={task.isFinished ? 'gray' : 'dimgray'}
        />
        <Text
          style={[
            styles.taskTitle,
            {
              textDecorationLine: task.isFinished ? 'line-through' : 'none',
              color: task.isFinished ? 'lightgray' : 'dimgray',
            },
          ]}
        >
          {task.title}
        </Text>
      </Pressable>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  taskTitle: {
    fontFamily: 'Inter',
    fontSize: 15,
    flex: 1,
  },
});

export default TaskListItem;
